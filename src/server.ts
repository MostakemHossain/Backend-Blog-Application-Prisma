import { Server } from "http";
import app from "./app";

const PORT = process.env.PORT || 3500;
let server:Server;
function main() {
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
main();
