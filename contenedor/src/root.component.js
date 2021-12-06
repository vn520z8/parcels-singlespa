import Parcel from "single-spa-react/parcel";

import { pUno, pDos } from "@orgname/componentes";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Parcel config={pUno} />
      <h1>SOY OTRA COSA::</h1>
      <Parcel config={pUno} />
      <Parcel config={pUno} />
      <Parcel config={pUno} />
      <h1>SOY OTRA COSA</h1>
      <Parcel config={pUno} />
      <h1>SOY OTRA COSA</h1>
      <Parcel config={pUno} />
      <h1>SOY OTRA COSA</h1>
      <Parcel config={pDos} />
      <h1>SOY OTRA COSA</h1>
      <Parcel config={pDos} />
      <h1>SOY OTRA COSA=============</h1>
      <Parcel config={pDos} />
      <h1>SOY OTRA COSA=============</h1>
      <Parcel config={pDos} />
      <Parcel config={pDos} />
    </section>
  );
}
