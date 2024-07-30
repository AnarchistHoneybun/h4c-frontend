import { GlobeComponent } from "@/components/GlobeComponent";
import { BlurInTitle } from "@/components/BlurInTitle";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <BlurInTitle />
          <p className="text-foreground mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iste
            fuga at odio blanditiis quas facere quidem debitis ullam libero animi
            a neque ut necessitatibus qui, et exercitationem porro id molestias
            dolores consectetur cupiditate. Cumque laboriosam ut sit consectetur
            eos minus, obcaecati voluptatum quas, temporibus minima odit fugiat
            repellendus consequuntur modi! Tenetur autem sint eos alias at quod
            molestias, iste nihil? Vero dolore, consequuntur beatae veritatis
            porro rerum optio minus tempore quae at iusto nesciunt atque omnis
            architecto. Illum nam, cum esse quia dolores consectetur molestiae
            aperiam tempore ut ab quibusdam impedit vitae. Aut impedit aliquid
            dolores esse eos. Molestias?
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <GlobeComponent />
        </div>
      </div>
    </div>
  );
}