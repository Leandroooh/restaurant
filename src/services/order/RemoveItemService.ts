import { prismaClient } from "../../prisma";

type ItemRequest = {
	itemId: string;
};

class RemoveItemService {
	async execute({ itemId }: ItemRequest) {
		if (!itemId) {
			throw new Error("Send the Item ID.");
		}

		const findItemId = await prismaClient.item.findFirst({
			where: { id: itemId },
		});

		if (!findItemId) {
			throw new Error("Item not found!");
		}

		const item = await prismaClient.item.delete({
			where: {
				id: itemId,
			},
		});

		return item;
	}
}

export { RemoveItemService };
