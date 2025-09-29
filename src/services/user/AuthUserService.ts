import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../prisma";

type AuthRequest = {
	email: string;
	password: string;
};

class AuthUserService {
	async execute({ email, password }: AuthRequest) {
		const user = await prismaClient.user.findFirst({
			where: {
				email,
			},
		});

		if (!user) {
			throw new Error("User or Password invalid!");
		}

		const passMatch = await compare(password, user.password);

		if (!passMatch) {
			throw new Error("User os Password invalid!");
		}

		const token = sign(
			{ user: user.name, email: user.email },
			process.env.JWT_SECRET,
			{ subject: user.id, expiresIn: "30d" },
		);

		return { id: user.id, name: user.name, email: user.email, token };
	}
}

export { AuthUserService };
