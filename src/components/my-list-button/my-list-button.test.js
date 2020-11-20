import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {MyListButton} from "./my-list-button";
import {noop} from "../../test-data";
import {AuthorizationStatus} from "../../const";

describe(`Should MyListButton render correctly`, () => {
  it(`If film is favorite`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListButton
              id={1}
              isFavorite={true}
              onMyListClick={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              isDataSending={false}
              isDataSendError={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`If film is not favorite`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListButton
              id={1}
              isFavorite={false}
              onMyListClick={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              isDataSending={false}
              isDataSendError={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When data is sending`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListButton
              id={1}
              isFavorite={false}
              onMyListClick={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              isDataSending={true}
              isDataSendError={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With data sending error`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListButton
              id={1}
              isFavorite={false}
              onMyListClick={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              isDataSending={false}
              isDataSendError={true}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
