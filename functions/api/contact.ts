export const onRequestPost: PagesFunction = async () => {
  return new Response(
    JSON.stringify({ success: true }),
    { headers: { "Content-Type": "application/json" } }
  );
};
