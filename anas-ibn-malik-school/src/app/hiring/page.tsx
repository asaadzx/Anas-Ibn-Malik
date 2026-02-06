"use client";

import React from "react";

export default function HiringPage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-[#2b1200] dark:to-[#120803] py-12">
			<div className="mx-auto max-w-3xl px-6">
				<header className="mb-8 text-center">
					<h1 className="text-3xl sm:text-4xl font-semibold text-orange-600 dark:text-orange-400">
						Join the School Website Club
					</h1>
					<p className="mt-2 text-gray-700 dark:text-gray-300">
						We're building fun projects — apply to contribute as a developer,artist, writer, or designer.
					</p>
				</header>

				<form
					action="https://formspree.io/f/xlgwedja"
					method="POST"
					className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 border border-orange-50 dark:border-orange-900"
				>
					<div className="grid gap-4 sm:grid-cols-2">
						<label className="block">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</span>
							<input
								type="text"
								name="name"
								required
								placeholder="Your full name"
								className="mt-2 block w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								autoComplete="name"
							/>
						</label>

						<label className="block">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-200">Grade / Class</span>
							<input
								type="text"
								name="grade"
								placeholder="e.g., 10th Grade, Class B"
								className="mt-2 block w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</label>

						<label className="block sm:col-span-2">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-200">Role Selection</span>
							<select
								name="role"
								defaultValue="Frontend Developer"
								className="mt-2 block w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							>
								<option>Frontend Developer</option>
								<option>Artist</option>
								<option>Content Writer</option>
								<option>News Reporter</option>
                                <option>Developer</option>
                                <option>Other</option>
							</select>
						</label>

						<label className="block sm:col-span-2">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-200">Experience or Message</span>
							<textarea
								name="experience or message"
								rows={5}
								placeholder="Tell us about your experience or paste portfolio links"
								className="mt-2 block w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</label>

						<label className="block sm:col-span-1">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-200">Contact Email</span>
							<input
								type="email"
								name="email"
								required
								placeholder="you@school.edu"
								className="mt-2 block w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								autoComplete="email"
							/>
						</label>

						<label className="block sm:col-span-1">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</span>
							<input
								type="tel"
								name="phone"
								placeholder="e.g., +20 1XXXXXXXXX"
								className="mt-2 block w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								autoComplete="tel"
							/>
						</label>
					</div>

					<div className="mt-6">
						<button
							type="submit"
							className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
						>
							Apply
						</button>
					</div>

					<div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
						After submitting you'll see a confirmation from Formspree. We'll email next steps if your application is a fit.
					</div>
				</form>

				<p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
					By applying you agree to be contacted about club activities. No prior
					experience required — curiosity and teamwork matter most.
				</p>
				<section className="mt-10 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-50 dark:border-orange-900">
					<h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4">School Website Ideas</h2>
					<ul className="space-y-3 text-gray-800 dark:text-gray-200">
						<li className="flex items-start">
							<input type="checkbox" checked className="mt-1 mr-3 accent-orange-500" disabled />
							<span>First Make A club Website hiring</span>
						</li>
						<li className="flex items-start">
							<input type="checkbox" checked className="mt-1 mr-3 accent-orange-500" disabled />
							<span>Here we are in this phase|</span>
						</li>
						<li className="flex items-start">
							<input type="checkbox" className="mt-1 mr-3 accent-orange-500" disabled />
							<span>Second Make Organization for the Club and Team Leader that is a teacher and cooool one !</span>
						</li>
						<li className="flex items-start">
							<input type="checkbox" className="mt-1 mr-3 accent-orange-500" disabled />
							<span>Third Connect Website with Supabase and Make Sure That The school has Email</span>
						</li>
						<li className="flex items-start">
							<input type="checkbox" className="mt-1 mr-3 accent-orange-500" disabled />
							<span>Forth Make Page that controls the website New Knowledge Section and School News</span>
						</li>
						<li className="flex items-start">
							<input type="checkbox" className="mt-1 mr-3 accent-orange-500" disabled />
							<span>Fifth Make Add Omar school Organization System for Classes and every Student section</span>
						</li>
						<li className="flex items-start">
							<input type="checkbox" className="mt-1 mr-3 accent-orange-500" disabled />
							<span>Sixth Make Email that gives notification for every student what Classes he has !!!</span>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
}

