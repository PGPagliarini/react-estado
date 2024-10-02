import Area from "@/components/template/Area";

export default function Temp() {
    return (
        <div className="flex flex-col gap-5 p-20 h-screen">
            <Area titulo="Teste do Componente" cor="red">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
            <Area titulo="Teste do Componente" sumario="R$5.900,00" cor="blue">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
        </div>
    )
}