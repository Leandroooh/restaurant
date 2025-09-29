import type { NextFunction, Request, Response } from "express";

export const ThrowError = (
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	if (err instanceof Error) {
		return res.status(400).json({ error: err.message });
	}

	return res.status(500).json({
		error: "error",
		message: "internal server error",
	});
};
