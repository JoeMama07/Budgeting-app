import { useEffect, useState } from "react";

interface IProps {
  children: any;
}

export default function OnMount({ children }: IProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return children;
}
