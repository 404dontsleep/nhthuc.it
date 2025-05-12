import fs from "fs";
import path from "path";

try {
  // Đọc nội dung từ file 404.html
  const content = fs.readFileSync("404.html", "utf8");

  // Đảm bảo thư mục dist tồn tại
  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist", { recursive: true });
  }

  // Ghi nội dung vào dist/404.html
  fs.writeFileSync(path.join("dist", "404.html"), content);

  console.log("Copy 404.html to dist success");
} catch (error) {
  console.error("Error copy 404.html to dist:", error);
  process.exit(1);
}
