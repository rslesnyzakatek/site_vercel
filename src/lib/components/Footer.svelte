<script>
	import { MapPin, Phone, Mail } from '@lucide/svelte';
	import logo from '$lib/assets/logo-light.svg';
</script>

<footer class="bg-primary pt-12 text-primary-foreground">
	<div class="container mx-auto px-4">
		<div class="mb-8 grid gap-8 text-center md:grid-cols-3 md:text-left">
			<div class="">
				<div class="mx-auto h-14 w-fit lg:mx-0">
					<img src={logo} alt="Leśny Zakątek" title="Leśny Zakątek" class="h-full w-auto" />
				</div>
				<p class="leading-relaxed text-primary-foreground/80">
					Rezydencja Seniora w sercu przyrody. <br /> Profesjonalna opieka i ciepła atmosfera dla Twoich
					bliskich.
				</p>
			</div>
			<hr class="mx-18 border-1 text-green-700 md:hidden" />
			<div>
				<h4 class="mb-1 text-lg font-semibold">
					REZYDENCJA SENIORA LEŚNY ZAKĄTEK <br />
					SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
				</h4>
				<p class="text-small mb-2 text-primary-foreground/75">NIP: 8561940905 / KRS: 0001191122</p>
				<div class="flex flex-col items-center space-y-2 text-primary-foreground/80 md:items-start">
					<div class="flex flex-row items-center">
						<MapPin class="mr-2 h-5 w-5 flex-shrink-0 " />
						<p>Olchowo 101 72-200 Nowogard <br /> woj. zachodniopomorskie</p>
					</div>
					<div class="flex flex-row items-center">
						<Phone class="mr-2 h-5 w-5 flex-shrink-0 " />
						<p>+48 797 187 786</p>
					</div>
					<div class="flex flex-row items-center">
						<Mail class="mr-2 h-5 w-5 flex-shrink-0 " />
						<p>lesnyzakatek.nowogard@gmail.com</p>
					</div>
				</div>
			</div>
			<hr class="mx-18 border-1 text-green-700 md:hidden" />
			<div>
				<div class="space-y-2 leading-7.5 text-primary-foreground/80">
					<p>
						Ośrodek wpisany do Rejestru placówek zapewniających całodobową opiekę osobom
						niepełnosprawnym, przewlekle chorym lub osobom w podeszłym wieku, prowadzonego przez <br
						/>
						Wojewodę Zachodniopomorskiego pod numerem 32. <br />
						Decyzja nr WZPS-3.9423.5.2025.EG z dnia 30.09.2025r.
					</p>
				</div>
			</div>
		</div>
	</div>
	<hr class="mx-18 border bg-green-700 pt-[1px] text-green-700 md:hidden" />
	<p class="mx-4 mb-4 py-6 text-center text-primary-foreground/70">
		© 2025 Rezydencja Seniora "Leśny Zakątek" Wszelkie prawa zastrzeżone.
	</p>
	<div class="border-green-700 bg-foreground py-12 text-center md:border-t-4">
		<div
			class="flex flex-col items-center justify-center gap-4 text-primary-foreground/70 md:flex-row"
		>
			<p class="text-base">Realizacja <br /> witryny</p>
			<img
				src="/adcare.webp"
				alt="AdCare Bartosz Kuliński"
				title="AdCare Bartosz Kuliński"
				class="h-14"
			/>
		</div>
	</div>
</footer>
