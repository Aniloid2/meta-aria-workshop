````markdown
# Meta Aria Project Setup

I Like Your Style

## Frontend Setup

### Environment Setup

First, you need to create an `.env` file with the following variables/API keys:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```
````

### Running Locally

To run the front end on your machine:

```bash
npm run dev
```

Then, access the app via `localhost:3000`.

The front end is otherwise hosted at [Meta Aria Frontend](https://meta-aria-front.vercel.app/).

## Backend Setup

The backend runs on Google Colab. To set it up:

1. Mount your Google Drive with the following snippet in a Colab notebook:

   ```python
   from google.colab import drive
   drive.mount('/content/drive')
   ```

2. Add your own Supabase API key and OpenAI API key in the respective locations in the main notebook.

```

```
