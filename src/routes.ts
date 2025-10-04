import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { AddItemController } from "./controllers/order/AddItemController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DetailsOrderController } from "./controllers/order/DetailsOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { SendOrderController } from "./controllers/order/SendOnderController";
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

/* Order Routes */
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete(
	"/order/remove",
	isAuthenticated,
	new RemoveItemController().handle,
);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrderController().handle);
router.get(
	"/order/detail",
	isAuthenticated,
	new DetailsOrderController().handle,
);
router.put(
	"/order/finish",
	isAuthenticated,
	new FinishOrderController().handle,
);

export { router };
