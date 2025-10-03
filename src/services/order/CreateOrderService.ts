import { prismaClient } from "../../prisma";

type OrderRequest = {
	table: number;
	name: string;
};
class CreateOrderService {
	async execute({ table, name }: OrderRequest) {
		const orderAlreadyExist = await prismaClient.order.findFirst({
			where: { table: Number(table), status: false },
		});

		if (orderAlreadyExist) {
			throw new Error("Already has a table open with this number!");
		}

		const order = await prismaClient.order.create({
			data: {
				table,
				name,
			},
		});

		return order;
	}
}

export { CreateOrderService };
