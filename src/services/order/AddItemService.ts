import { prismaClient } from "../../prisma";

type ItemRequest = {
	orderId: string;
	productId: string;
	amount: number;
};

class AddItemService {
	async execute({ orderId, productId, amount }: ItemRequest) {
		const item = await prismaClient.item.create({
			data: {
				orderId,
				productId,
				amount,
			},
		});

		return item;
	}
}

export { AddItemService };
