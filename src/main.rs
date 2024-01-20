mod github;
use leptos::*;

fn main() {
    leptos::mount_to_body(|| {
        view! {
            <div class="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
                <aside class="w-full md:w-1/2 relative md:sticky top-0 left-0  h-full p-4 lg:p-16 md:p-8">
                    <Owner/>
                </aside>
                <main class="w-full md:w-1/2 p-4 lg:p-16 md:p-8">
                    <Experience/>
                    <Education/>
                    <Projects/>
                </main>
            </div>
        }
    })
}

#[component]
fn Owner() -> impl IntoView {
    let once = create_resource(
        || (),
        |_| async move {
            let resp = reqwest::get("https://api.github.com/users/mukulve")
                .await
                .unwrap()
                .json::<github::Owner>()
                .await
                .unwrap();
            resp
        },
    );

    view! {
        {move || match once.get() {
            None => view! { <p>"Loading Owner"</p> }.into_view(),
            Some(data) => view! {
                <img src={data.avatar_url} alt="Avatar" class="rounded-lg h-[300px] hidden md:block mb-4 "/>
                <h1 class="text-6xl font-extrabold pb-4">"Mukul Verma"</h1>
                <h2 class="text-xl font-bold pb-4">{data.bio}</h2>
            }.into_view()
        }}
        <div class="flex flex-row gap-x-4 flex-wrap font-medium">
            <a href="https://github.com/mukulve">"Github"</a>
            <a href="https://www.linkedin.com/in/mukul-verma-a5012522a/">"Linkedin"</a>
            <a href="https://codepen.io/mukulve">"Codepen"</a>
        </div>
    }
}

#[component]
fn Education() -> impl IntoView {
    view! {
        <h1 class="text-4xl font-bold pb-4">"Education"</h1>
        <ul>
            <li class="mb-4 leading-relaxed bg-[#efefef] p-2 rounded-lg">
                <h1 class="font-medium">"Software Engineering"</h1>
                <h2 class="text-sm">"University of Guelph | September 2022 - May 2026"</h2>
            </li>
        </ul>
    }
}

#[component]
fn Experience() -> impl IntoView {
    view! {
        <h1 class="text-4xl font-bold pb-4">"Experience"</h1>
        <ul>
            <li class="mb-4 leading-relaxed bg-[#efefef] p-2 rounded-lg">
                <h1 class="font-medium">"Software Engineer Intern"</h1>
                <h2 class="text-sm">"Spraying Systems Company | May 2023 - September 2023"</h2>
                <p class="">"Developed and maintained a variety of .NET applications such as ASP.NET APIs, Blazor Web Apps, Microservices and more. Created tables and views in SQL. Wrote unit tests and integration tests using MSTest. Actively participated in Agile development processes, including daily stand-ups, sprint planning, and retrospective meetings. Created interactive reports using SQL Server Reporting Services and Visual Basic."</p>
            </li>
        </ul>
    }
}

#[component]
fn Projects() -> impl IntoView {
    let once = create_resource(
        || (),
        |_| async move {
            let resp = reqwest::get("https://api.github.com/users/mukulve/repos")
                .await
                .unwrap()
                .json::<Vec<github::Repo>>()
                .await
                .unwrap();
            resp
        },
    );

    view! {
        <h1 class="text-4xl font-bold pb-4">"Projects"</h1>
        {move || match once.get() {
            None => view! { <p>"Loading Projects"</p> }.into_view(),
            Some(data) => view! {
                <ul>
                    {data
                        .into_iter()
                        .map(|n|
                        view!
                        {
                            <li class="mb-4 leading-relaxed bg-[#efefef] p-2 rounded-lg">
                                <a href={n.html_url}>
                                    <h1 class="font-medium">{n.name}</h1>
                                    <h2 class="text-sm">{n.language}</h2>
                                    <p class="">{n.description}</p>
                                </a>

                            </li>
                        })
                        .collect::<Vec<_>>()
                    }
                </ul>
            }.into_view()
        }}
    }
}
