const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

export default {
  async fetch(request) {

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    try {
      const resp = await fetch("http://HOSTNAME/api/line_horaires/48", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reseaux_id: 8 }),
      });

      if (!resp.ok) {
        throw new Error(`API returned ${resp.status}`);
      }

      const data = await resp.json();

      const buses = [];
      for (const key of ["buses_aller", "buses_retour"]) {
        for (const b of (data[key] || [])) {
          const [lat, lng] = (b.localisation || "").split(",").map(Number);
          if (!isNaN(lat) && !isNaN(lng)) {
            buses.push({
              bus: b.bus,
              sens: b.sens,
              lat, lng,
              src_updated_at: b.updated_at,
            });
          }
        }
      }

      return new Response(
        JSON.stringify({ fetched_at: new Date().toISOString(), buses }),
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
            ...CORS,
          }
        }
      );

    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...CORS,
          }
        }
      );
    }
  }
};