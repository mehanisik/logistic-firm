# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Development stage
FROM base AS development
ENV NODE_ENV=development
ENV PORT=8000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=install /temp/dev/node_modules ./node_modules
COPY . .
USER bun
EXPOSE 8000
CMD ["bun", "run", "dev"]

# Builder stage
FROM base AS builder
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=install /temp/dev/node_modules ./node_modules
COPY . .
RUN bun run build

# Production stage
FROM base AS production
ENV NODE_ENV=production
ENV PORT=8000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

# Copy necessary files from builder
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=install /temp/prod/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

USER bun
EXPOSE 8000
CMD ["node", "server.js"]