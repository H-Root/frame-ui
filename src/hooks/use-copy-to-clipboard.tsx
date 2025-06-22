import { useState } from "react";

type TUseCopyToClipboardProps = {
	timeout?: number;
	onCopy?: () => void;
};

const useCopyToClipboard = ({
	onCopy,
	timeout = 2000,
}: TUseCopyToClipboardProps) => {
	const [isCopied, setIsCopied] = useState(false);

	const copy = (data: string) => {
		if (!window || !window.navigator.clipboard) {
			return;
		}

		const clipBoard = window.navigator.clipboard;

		clipBoard.writeText(data).then(() => {
			setIsCopied(true);

			if (onCopy) {
				onCopy();
			}

			if (timeout !== 0) {
				setTimeout(() => {
					setIsCopied(false);
				}, timeout);
			}
		});
	};

	return { copy, isCopied };
};

export default useCopyToClipboard;
