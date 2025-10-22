<script lang="ts">
	import emailjs from '@emailjs/browser';
	import Button from '$lib/ui/Button.svelte';
	import Card from '$lib/ui/Card.svelte';
	import { MapPin, Phone, Mail, Clock, Send } from '@lucide/svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	const contactInfo = [
		{
			icon: Phone,
			title: 'Telefon',
			details: ['+48 797 187 786', 'Codziennie 8:00 - 16:00'],
			action: 'tel:+48797187786'
		},
		{
			icon: Mail,
			title: 'Email',
			details: ['lesnyzakatek.nowogard@gmail.com', 'Odpowiadamy w 24h'],
			action: 'mailto:lesnyzakatek.nowogard@gmail.com'
		},
		{
			icon: MapPin,
			title: 'Adres',
			details: ['Olchowo 101 72-200 Nowogard', 'województwo zachodniopomorskie'],
			action: 'https://maps.app.goo.gl/Ly19KoQpNiye1yfJ6'
		},
		{
			icon: Clock,
			title: 'Odwiedziny',
			details: ['Codziennie', '10:00 - 17:00'],
			action: 'tel:+48123456789'
		}
	];

	let formData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};

	let lastSent = 0;
	function canSend() {
		const now = Date.now();
		if (now - lastSent < 10000) {
			alert('Poczekaj chwilę przed ponownym wysłaniem.');
			return false;
		}
		lastSent = now;
		return true;
	}

	let errors: { [key: string]: string } = {};
	let isSubmitting = false;
	const toastMessage = writable<string | null>(null);

	const validate = () => {
		const newErrors: { [key: string]: string } = {};
		if (!formData.name.trim()) {
			newErrors.name = 'Imię i nazwisko są wymagane.';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email jest wymagany.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Nieprawidłowy format email.';
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Wiadomość jest wymagana.';
		}
		return newErrors;
	};

	const handleSubmit = async (e: Event) => {
		if (!canSend()) return;
		e.preventDefault();
		errors = validate();
		if (Object.keys(errors).length === 0) {
			isSubmitting = true;
			try {
				await emailjs.send(
					'service_form',
					'template_7jjqjrr',
					{
						title: 'Formularz kontaktowy ze strony',
						name: formData.name,
						email: formData.email,
						phone: formData.phone,
						message: formData.message
					},
					'Yf4SNVhJSYCRpvnH7'
				);
				toastMessage.set('Wiadomość wysłana! Skontaktujemy się z Tobą wkrótce.');
				formData = { name: '', email: '', phone: '', message: '' };
			} catch (error) {
				toastMessage.set('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
			} finally {
				isSubmitting = false;
				setTimeout(() => toastMessage.set(null), 5000);
			}
		}
	};

	const handleInput = (field: keyof typeof formData, value: string) => {
		formData[field] = value;
		if (errors[field]) {
			delete errors[field];
		}
	};
</script>

<section id="contact" class="scroll-m-8 bg-background py-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-primary md:text-5xl">Zapraszamy do kontaktu</h2>
			<p class="text-lg text-muted-foreground">
				Serdecznie zapraszamy do osobistego odwiedzenia naszego ośrodka. Z przyjemnością pokażemy
				Wam nasz ośrodek i odpowiemy na wszelkie pytania.
			</p>
		</div>

		<div class="mx-auto mb-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each contactInfo as { icon: Icon, title, details, action }, i (title)}
				<a
					href={action}
					class="rounded-lg border border-border bg-card p-6 text-center text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:hidden"
				>
					<div
						class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
					>
						<Icon class="h-8 w-8 text-primary" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-card-foreground">
						{title}
					</h3>
					{#each details as detail, idx}
						<p
							class={`text-sm ${
								idx === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'
							}`}
						>
							{detail}
						</p>
					{/each}
				</a>

				<div
					class="hidden rounded-lg border border-border bg-card p-6 text-center text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:block"
				>
					<div
						class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
					>
						<Icon class="h-8 w-8 text-primary" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-card-foreground">
						{title}
					</h3>
					{#each details as detail, idx}
						<p
							class={`text-sm ${
								idx === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'
							}`}
						>
							{detail}
						</p>
					{/each}
				</div>
			{/each}
		</div>

		<div class="mx-auto max-w-2xl">
			<Card clazz="border-primary/20 p-8">
				<h3 class="mb-4 text-center text-2xl font-bold text-primary">Wyślij wiadomość</h3>
				<p class="mb-6 text-center text-muted-foreground">
					Wypełnij formularz, a skontaktujemy się z Tobą najszybciej jak to możliwe.
				</p>
				<form on:submit={handleSubmit} class="space-y-4">
					<div>
						<label for="name" class="text-foreground"> Imię i nazwisko * </label>
						<input
							id="name"
							name="name"
							bind:value={formData.name}
							on:input={(e) =>
								handleInput('name', (e.target && (e.target as HTMLInputElement).value) || '')}
							class="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
							placeholder="Jan Kowalski"
						/>
						{#if errors.name}
							<p class="mt-1 text-sm text-red-500">{errors.name}</p>
						{/if}
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<label for="email" class="text-foreground"> Email * </label>
							<input
								id="email"
								name="email"
								type="email"
								bind:value={formData.email}
								on:input={(e) =>
									handleInput('email', (e.target && (e.target as HTMLInputElement).value) || '')}
								class="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
								placeholder="jan@przykład.pl"
							/>
							{#if errors.email}
								<p class="mt-1 text-sm text-red-500">{errors.email}</p>
							{/if}
						</div>

						<div>
							<label for="phone" class="text-foreground">Telefon</label>
							<input
								id="phone"
								name="phone"
								type="tel"
								bind:value={formData.phone}
								on:input={(e) =>
									handleInput('phone', (e.target && (e.target as HTMLInputElement).value) || '')}
								class="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
								placeholder="+48 123 456 789"
							/>
						</div>
					</div>

					<div>
						<label for="message" class="text-foreground"> Wiadomość * </label>
						<textarea
							id="message"
							name="message"
							bind:value={formData.message}
							on:input={(e) =>
								handleInput('message', (e.target && (e.target as HTMLInputElement).value) || '')}
							class="mt-1.5 flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
							placeholder="Opisz w czym możemy pomóc..."
						></textarea>
						{#if errors.message}
							<p class="mt-1 text-sm text-red-500">{errors.message}</p>
						{/if}
					</div>

					<Button
						variant="default"
						size="lg"
						clazz="w-full text-lg"
						on:click={handleSubmit}
						disabled={isSubmitting}
					>
						<Send class="mr-2 h-5 w-5" />
						{isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
					</Button>
				</form>
			</Card>
		</div>
	</div>
</section>

{#if $toastMessage}
	<div
		class="fixed right-4 bottom-4 z-50 w-80 rounded-lg bg-white p-4 shadow-lg transition-transform duration-300"
		in:fly={{ y: 100, duration: 300 }}
		out:fly={{ y: 100, duration: 300 }}
	>
		<p class="text-left text-sm font-medium text-gray-800">{$toastMessage}</p>
	</div>
{/if}
