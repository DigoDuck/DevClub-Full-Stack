import multer from "multer";
import { resolve, extname } from "node:path";
import {v4} from "uuid";

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "uploads"),
        filename: (req, file, cb) => 
           cb(null, v4() + extname(file.originalname)),
    }),
}