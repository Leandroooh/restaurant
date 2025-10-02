import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { DetailsUserController } from "./controllers/users/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

/* User Routes */
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

/* Category Routes */
router.post(
	"/category",
	isAuthenticated,
	new CreateCategoryController().handle,
);
router.get("/category", isAuthenticated, new ListCategoryController().handle);

/* Product Routes */
router.post(
	"/product",
	isAuthenticated,
	upload.single("file"),
	new CreateProductController().handle,
);

router.get("/product", isAuthenticated, new ListByCategoryController().handle);

export { router };
