--! Previous: sha1:79f3977d3d75eeb2981a86089489a538bc96feb3
--! Hash: sha1:5bf518c9b7403a3f22181e2539c20f4944c695a5

ALTER TABLE "exchange" DROP COLUMN IF EXISTS url;
ALTER TABLE "exchange" ADD COLUMN url TEXT NOT NULL DEFAULT '';
ALTER TABLE "exchange" ALTER COLUMN url DROP DEFAULT;
