const playlist = {
  all: 'get-all-playlists',
}

const album = {
  all: 'get-all-albums',
}

const artist = {
  all: 'get-all-artists',
}

const song = {
  all: 'get-all-songs',
}

const radio = {
  all: 'get-all-radios',
}

export const queryKeys = {
  album,
  artist,
  playlist,
  song,
  radio,
}

export const allQueryKeys: string[] = Object.values(queryKeys).flatMap(
  Object.values,
)
