import React from "react";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import App from "./App";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import CardDetail from "./components/CardDetail/CardDetail";
import NavBar from "./components/NavBar/NavBar";

Enzyme.configure({ adapter: new Adapter() });
describe("App", () => {
  let store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  }).catch(err => {
    console.log(err)
  });
  describe("El componente NavBar debe renderizar en todas las rutas.", () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
    });
    it('Debería renderizarse en la ruta "/otraRuta"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/otraRuta"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
    });
  });

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NavBar)).toHaveLength(1);
    expect(wrapper.find(Form)).toHaveLength(0);
  });

  it("El componente Form debe renderizar en la ruta /activity - este test no pasará si Otro componente (que no sea Nav) se renderiza en esta ruta.", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/activity"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(NavBar)).toHaveLength(1);
    expect(container.find(Home)).toHaveLength(0);
    expect(container.find(Form)).toHaveLength(1);
  });

  it("El componente CardDetail debe renderizar en la ruta /detail/:id", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/detail/ARG"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(NavBar)).toHaveLength(1);
    expect(container.find(Home)).toHaveLength(0);
    expect(container.find(Form)).toHaveLength(0);
    expect(container.find(CardDetail)).toHaveLength(1);
  });
