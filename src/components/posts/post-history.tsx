"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
interface PostHistoryProps {
  postId: string;
  history: {
    user: string;
    action: string;
    date: string;
  }[];
}

export function PostHistory({ postId, history }: PostHistoryProps) {
  // Filtrar histórico pelo ID do post

  if (history.length === 0) {
    return (
      <p className="text-muted-foreground">
        Nenhum histórico encontrado para esta postagem.
      </p>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Usuário</TableHead>
          <TableHead>Ação</TableHead>
          <TableHead>Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {history.map((item, key) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{item.user}</TableCell>
            <TableCell>{item.action}</TableCell>
            <TableCell>{formatDate(item.date)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
