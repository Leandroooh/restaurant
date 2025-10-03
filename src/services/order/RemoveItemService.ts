import { prismaClient } from "../../prisma";

type ItemRequest = {
	itemId: string;
};

class RemoveItemService {
	async execute({ itemId }: ItemRequest) {
		const item = await prismaClient.item.delete({
			where: {
				id: itemId,
			},
		});

		return item;
	}
}

export { RemoveItemService };
