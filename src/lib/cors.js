import Cors from "cors";

const cors = Cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"], 
});


function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    })
  })
}

export default async function corsMiddleware(req, res) {
  await runMiddleware(req, res, cors)
}
