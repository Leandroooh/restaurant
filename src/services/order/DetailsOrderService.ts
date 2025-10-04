import { prismaClient } from "../../prisma";

type DetailsRequest = {
	orderId: string;
};

class DetailsOrderService {
	async execute({ orderId }: DetailsRequest) {
		const orders = await prismaClient.item.findMany({
			where: {
				orderId,
			},
			include: {
				Order: true,
				Product: true,
			},
		});

		return orders;
	}
}

export { DetailsOrderService };
