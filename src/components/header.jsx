import { Filters } from './Filters';
export function header(changeFilters) {
  <header>
    <h1> react shop</h1>
    <Filters onChage={changeFilters} />
  </header>;
}
