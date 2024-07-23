export async function fetchLatestMovies(type: string, page: number) {
  try {
    const data = await fetch(`https://vidsrc.to/vapi/movie/${type}/${page}`);
    const latestMovies = await data.json();

    if (latestMovies.status === 200) {
      return latestMovies.result.items;
    }
    // TODO handle else case
  } catch (error) {
    console.log(error);
    // TODO handle error case
  }
}
