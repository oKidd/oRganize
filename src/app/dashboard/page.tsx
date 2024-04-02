import ChatPreview from "@/components/Dashboard/ChatPreview"
import Moment from "@/components/Dashboard/Moment"
import VerticalNavbar from "@/components/Dashboard/VerticalNavbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "oRganize",
  description: "Dashboard",
}

export default function Dashboard() {
  return (
    <div className="h-screen w-100 bg-neutral-900 text-white">
      <div className="flex flex-row h-full">
        <div id="main" className="flex w-10/12 h-full">
          <div className="flex rounded-lg h-5/6 w-11/12 m-auto bg-neutral-950/50">
            <div className="m-auto">
                <h1 className="text-3xl font-light">Proximamente</h1>
                <p className="text-lg text-center">Contenido principal</p>
            </div>
          </div>
        </div>
        
        <div id="chats" className="flex w-3/12 h-full">
          <div className="rounded-lg h-5/6 w-11/12 my-auto bg-neutral-950/50 overflow-hidden overflow-y-scroll">
            <h1 className="text-center mt-2">Moments</h1>
            <div className="flex overflow-hidden h-1/6 w-full border-neutral-800 border-b-2">
              <Moment src="/users/1.jpg" username="Sofia" />
              <Moment src="/users/7.jpg" username="Martin" />
              <Moment src="/users/3.jpg" username="Susana" />
              <Moment src="/users/2.jpg" username="Lorena" />
            </div>
            <h1 className="text-center mt-2">Chats</h1>
            <div className="">
              {/* chats */}
              <ChatPreview
                username="Felipe"
                src="/users/6.jpg"
                msg="Con esta app no necesitas nada mas"
              />
              <ChatPreview
                username="Lorena"
                src="/users/2.jpg"
                msg="Es increible esta app, ya no requiero"
              />
              <ChatPreview
                username="Susana"
                src="/users/3.jpg"
                msg="Antes tenia que enviar todo por correo"
              />
              <ChatPreview
                username="Sofia"
                src="/users/1.jpg"
                msg="Recuerda adjuntar la fecha de la evaluacion"
              />
              <ChatPreview
                username="Martin"
                src="/users/7.jpg"
                msg="Ya te envie todo lo necesario para que puedas continuar"
              />
              <ChatPreview
                username="Felipe"
                src="/users/6.jpg"
                msg="Con esta app no necesitas nada mas"
              />
              <ChatPreview
                username="Lorena"
                src="/users/2.jpg"
                msg="Es increible esta app, ya no requiero"
              />
              <ChatPreview
                username="Susana"
                src="/users/3.jpg"
                msg="Antes tenia que enviar todo por correo"
              />
              <ChatPreview
                username="Sofia"
                src="/users/1.jpg"
                msg="Recuerda adjuntar la fecha de la evaluacion"
              />
              <ChatPreview
                username="Martin"
                src="/users/7.jpg"
                msg="Ya te envie todo lo necesario para que puedas continuar"
              />
            </div>
          </div>
        </div>
        <VerticalNavbar />
      </div>
    </div>
  )
}
