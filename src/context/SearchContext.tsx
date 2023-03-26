import { createContext, useState } from "react";

type SearchContextValue = {
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
};

export const SearchContext = createContext<SearchContextValue>({
	searchTerm: "",
	setSearchTerm: () => {},
});

interface Props {
	children: React.ReactNode;
}

export const SearchProvider = ({ children } : Props) => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
			{children}
		</SearchContext.Provider>
	);
};
