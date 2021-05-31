import React from "react";
import { Container } from "./styles";

export const FooterPages: React.FC = () => {
  // const [, setJobs] = useState([]);
  // const [page, setPage] = useState(1);
  // const [pages, setPages] = useState(0);
  // useEffect(() => {
  //   api.get(`/${page}`).then((response) => {
  //     const { data, totalPages } = response.data;

  //     setJobs(data);
  //     setPages(totalPages);
  //   });
  // }, [page]);

  // function nextPage() {
  //   if (page < pages) {
  //     setPage(page + 1);
  //     saveLastPage();
  //   }
  // }

  // function previousPage() {
  //   if (page === 1) {
  //     return;
  //   }
  //   setPage(page - 1);
  //   saveLastPage();
  // }

  // function saveLastPage() {
  //   localStorage.setItem("@:page", page.toString());
  // }
  return (
    <Container className="footerPages">
      <button className="leftArrow">
        <img src="./assets/leftArrow.svg" alt="Anterior" />
        <p className="fallBack">Anterior</p>
      </button>
      <span> 1 2 3 4 5 ... 254</span>
      <button className="rightArrow">
        <p className="forward">Próxima</p>
        <img src="./assets/rightArrow.svg" alt="Próximo" />
      </button>
    </Container>
  );
};
