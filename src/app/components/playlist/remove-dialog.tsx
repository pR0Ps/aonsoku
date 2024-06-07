import { MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog"

import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/routes/routesList"
import { usePlaylists } from "@/app/contexts/playlists-context"

interface RemovePlaylistDialogProps {
  playlistId: string
  openDialog: boolean
  setOpenDialog: (value: boolean) => void
}

export function RemovePlaylistDialog({ playlistId, openDialog, setOpenDialog }: RemovePlaylistDialogProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { removePlaylist } = usePlaylists()

  async function handleRemovePlaylist(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    await removePlaylist(playlistId)
    setOpenDialog(false)
    navigate(ROUTES.LIBRARY.HOME)
  }

  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {t('playlist.removeDialog.title')}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t('playlist.removeDialog.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpenDialog(!openDialog)}>
            {t('logout.dialog.cancel')}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleRemovePlaylist}>
            {t('logout.dialog.confirm')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}