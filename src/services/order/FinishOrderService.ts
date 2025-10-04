import { prismaClient } from "../../prisma";

type FinishRequest = {
	orderId: string;
};

class FinishOrderService {
	async execute({ orderId }: FinishRequest) {
		const order = await prismaClient.order.update({
			where: {
				id: orderId,
			},
			data: {
				status: true,
			},
		});

		return order;
	}
}

export { FinishOrderService };
