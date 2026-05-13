import {
	BadgeCheck,
	BookText,
	Calculator,
	ChartNoAxesColumn,
	ChevronRight,
	FileText,
	FlaskConical,
	House,
	Lightbulb,
	Link as Lk,
	SquareRadical,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function App() {
	return (
		<>
			<div className="flex md:hidden items-center justify-center h-screen px-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-red-500 mb-4">
						Indisponível para dispositivos móveis
					</h1>

					<p className="text-gray-600 text-lg">
						Este sistema ainda não possui suporte para celulares.
					</p>
				</div>
			</div>

			<div className="p-4 h-25 bg-linear-65 from-violet-500 to-indigo-700 m-2 rounded-md items-center gap-2 sm:hidden md:flex">
				<Button className="rounded-lg bg-zinc-100 p-3 center h-full w-18 text-lg">
					<House strokeWidth={3} className="size-full text-indigo-700" />
				</Button>
				<div className="center flex flex-col gap-2">
					<h1 className="text-2xl text-zinc-100 font-extrabold leading-none">
						Avaliação e Validação do Percurso do Estudante
					</h1>
					<p className="text-sm text-zinc-300">
						Entenda como funciona a validação do percurso do estudante
					</p>
				</div>
			</div>
			<div className="p-1 m-2 mt-4 flex gap-6">
				<div className="p-5 flex flex-col gap-5 rounded-md  center w-6/10 bg-zinc-100">
					<div className="flex gap-2">
						<Button className="rounded-lg bg-indigo-100 p-4 center h-22 w-22 text-lg">
							<BookText strokeWidth={3} className="size-13 text-indigo-600" />
						</Button>
						<div className="flex self-center flex-col gap-0.5">
							<h2 className="font-bold text-xl">Como funciona a avaliação?</h2>
							<p className="text-[14px] ml-2">
								A avaliação do aluno no componente de RPP deve ocorrer de duas
								formas distintas, que, ao final, irão compor uma única nota.
							</p>
						</div>
					</div>

					<div className="ml-10 flex gap-2">
						<Button className="rounded-full bg-amber-100 p-4 center h-20 w-20 text-lg">
							<FileText strokeWidth={3} className="size-10 text-amber-400" />
						</Button>
						<div className="flex self-center flex-col gap-0.5">
							<h2 className="font-bold text-base bg-amber-100 text-amber-500 p-1 self-start">
								Avaliação Formativa (Peso 4,0)
							</h2>
							<p className="text-[14px] ml-2">
								Tem por finalidade monitorar continuamente o desenvolvimento do
								estudante ao longo de todo o processo.
							</p>
						</div>
					</div>

					<div className="ml-10 flex gap-2">
						<Button className="rounded-full bg-red-200 p-4 center h-20 w-20 text-lg">
							<BadgeCheck strokeWidth={3} className="size-10 text-red-500" />
						</Button>
						<div className="flex self-center flex-col gap-0.5">
							<h2 className="font-bold text-base bg-red-100 text-red-500 p-1 self-start">
								Avaliação de Validação (Peso 6,0)
							</h2>
							<p className="text-[14px] ml-2">
								Tem por finalidade verificar se o estudante consolidou as
								habilidades que motivaram o ingresso no componente de RPP.
							</p>
						</div>
					</div>

					<div className="ml-10 flex gap-2">
						<Button className="rounded-full bg-green-200 p-4 center h-20 w-20 text-lg">
							<Calculator strokeWidth={3} className="size-10 text-green-500" />
						</Button>
						<div className="flex self-center flex-col gap-0.5">
							<h2 className="font-bold text-base bg-green-100 text-green-600 p-1 self-start">
								Composição Final da Nota
							</h2>
							<p className="text-[14px] ml-2">
								A nota final, é calculada por meio da média ponderada entre a
								avaliação formativa (peso 4,0) e a avaliação de validação (peso
								6,0).
							</p>
						</div>
					</div>

					<div className="p-4 bg-indigo-100 rounded-sm">
						<div className="flex gap-3">
							<ChartNoAxesColumn
								strokeWidth={4}
								className="size-8 text-indigo-500"
							/>
							<h2 className="self-center font-bold text-indigo-600 text-lg">
								Exemplo de cálculo
							</h2>
						</div>
						<div className="mt-3 bg-zinc-50">
							<div className="h-10 grid grid-cols-4 border-2 border-indigo-200 bg-indigo-400 ">
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									Aluno
								</p>
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									AF (Peso 4,0)
								</p>
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									AV (Peso 6,0)
								</p>
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									Nota Final
								</p>
							</div>

							<div className="h-10 grid grid-cols-4 border-2 border-indigo-200 ">
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									João Fernandes
								</p>
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									8,0
								</p>
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									6,0
								</p>
								<p className="border-r-2 border-indigo-200 text-center content-center font-bold h-full">
									6,8
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="p-5 rounded-md  center w-4/10 bg-zinc-100">
					<div className="ml-1 flex gap-2">
						<Button className="rounded-md bg-indigo-100 p-4 center h-20 w-20 text-lg">
							<Lk strokeWidth={3} className="size-10 text-indigo-500" />
						</Button>
						<div className="flex self-center flex-col gap-0.5">
							<h2 className="font-extrabold text-lg text-indigo-600 p-1 self-start">
								Disciplinas
							</h2>
							<p>Acesse o conteúdo de cada disciplina</p>
						</div>
					</div>
					<a
						href="https://docs.google.com/spreadsheets/d/1uguTKWEF5tQlL1V5LcnZIh4W90n5V-9DbcLNX68hGeM/edit?pli=1&gid=832406575#gid=832406575"
						target="_blank"
						className="p-2 mt-6 w-full h-24 flex justify-between hover:bg-violet-300 bg-violet-200 rounded-md"
						rel="noopener noreferrer"
					>
						<Button className="rounded-md self-center bg-violet-400 p-4 center ml-2 h-16 w-16 text-lg">
							<h1 className="font-extrabold text-3xl">EN</h1>
						</Button>
						<h2 className="self-center text-lg text-zinc-700 font-extrabold">
							Língua Inglesa
						</h2>
						<ChevronRight
							strokeWidth={3}
							className="size-8 self-center text-violet-500"
						/>
					</a>

					<a
						href="https://docs.google.com/spreadsheets/d/1uguTKWEF5tQlL1V5LcnZIh4W90n5V-9DbcLNX68hGeM/edit?pli=1&gid=504457450#gid=504457450"
						target="_blank"
						className="p-2 mt-6 w-full h-24 flex justify-between hover:bg-green-300 bg-green-200 rounded-md"
						rel="noopener noreferrer"
					>
						<Button className="rounded-md self-center bg-green-400 p-4 center ml-2 h-16 w-16 text-lg">
							<FlaskConical strokeWidth={3} className="size-10 " />
						</Button>
						<h2 className="self-center text-lg text-zinc-700 font-extrabold">
							Química
						</h2>
						<ChevronRight
							strokeWidth={3}
							className="size-8 self-center text-green-500"
						/>
					</a>
					<a
						href="https://docs.google.com/spreadsheets/d/1uguTKWEF5tQlL1V5LcnZIh4W90n5V-9DbcLNX68hGeM/edit?pli=1&gid=969341552#gid=969341552"
						target="_blank"
						className="p-2 mt-6 w-full h-24 flex justify-between hover:bg-red-300 bg-red-200 rounded-md"
						rel="noopener noreferrer"
					>
						<Button className="rounded-md self-center bg-red-400 p-4 center ml-2 h-16 w-16 text-lg">
							<SquareRadical strokeWidth={2.4} className="size-10 " />
						</Button>
						<h2 className="self-center text-lg text-zinc-700 font-extrabold">
							Matemática
						</h2>
						<ChevronRight
							strokeWidth={3}
							className="size-8 self-center text-red-500"
						/>
					</a>

					<div className="bg-sky-200 p-4 mt-4 rounded-md">
						<div className="flex gap-3">
							<Lightbulb strokeWidth={3} className="size-8 text-sky-500" />
							<h2 className="self-center text-sky-600 text-md">Informativos</h2>
						</div>
						<p className="mt-1 font-light text-sm">
							As avaliações deverão ser entregues à coordenação de RPP já
							corrigidas, para registro e posterior upload no Drive.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
