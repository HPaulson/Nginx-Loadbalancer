FROM denoland/deno:1.45.5

EXPOSE 8080

ENV PORT 8080

USER deno

COPY . .

CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "--allow-run", "main.ts"]