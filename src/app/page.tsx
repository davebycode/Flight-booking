import Address from "./address/address"
import HomePage from "./home/home"
import Cabin from "./cabin/cabin"
import Know from "./know/know"
import Airport from "./airport/airport"
import Devices from "./devices/devices"
import Lounge from "./lounge/lounge"
import Landing from "./landing/landing"
import Booking from "./booking/booking"

export default function Home() {
  return (
    <main>
      <HomePage/>
      <Cabin/>
      <Airport/>
      <Know/>
      <Devices/>
      <Lounge/>
      <Landing/>
      <Booking/>
        <Address/>
    </main>
  )
}
