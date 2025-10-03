import { prismaClient } from "../../prisma";

type OrderRequest = {
	orderId: string;
};

class RemoveOrderService {
	async execute({ orderId }: OrderRequest) {
		const findOrderById = await prismaClient.order.findFirst({
			where: {
				id: orderId,
				status: false,
			},
		});

		if (!findOrderById) {
			throw new Error("Order not found! Id or Status not valid!");
		}

		const order = await prismaClient.order.delete({
			where: {
				id: orderId,
			},
		});

		return order;
	}
}

export { RemoveOrderService };
