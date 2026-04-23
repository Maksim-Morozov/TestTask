import React, { useState } from 'react';
import { Column as ColumnType, Card as CardType } from '../../store/slices/boardSlice';
import {
  ColumnWrapper,
  ColumnHeader,
  CountBadge,
  ColumnTitleInput,
  CardList,
  AddCardButton,
  DeleteColumnButton,
  EditIconButton,
  ColorPickerWrapper,
  ColorPicker,
  ButtonsContainer,
} from './Column.styles';
import Card from '../Card/Card';

interface Props {
  column: ColumnType;
  onAddCard: (columnId: string) => void;
  onEditCard: (card: CardType, columnId: string) => void;
  onDeleteCard: (cardId: string, columnId: string) => void;
  onDeleteColumn: (columnId: string) => void;
  onColorChange: (columnId: string, color: string) => void;
  onRenameColumn: (columnId: string, title: string) => void;
  onDragStart: (e: React.DragEvent, cardId: string, columnId: string) => void;
  onDrop: (e: React.DragEvent, columnId: string, toIndex: number) => void;
}

function Column({ 
  column, 
  onAddCard, 
  onEditCard, 
  onDeleteCard, 
  onDeleteColumn, 
  onColorChange, 
  onRenameColumn, 
  onDragStart, 
  onDrop 
}: Props) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [title, setTitle] = useState(column.title);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDrop(e: React.DragEvent) {
    setIsDragOver(false);
    onDrop(e, column.id, column.cards.length);
  }

  function handleTitleBlur() {
    const trimmed = title.trim();
    if (trimmed && trimmed !== column.title) {
      onRenameColumn(column.id, trimmed);
    } else {
      setTitle(column.title);
    }
  }

  function handleDeleteColumn() {
    if (window.confirm(`Удалить колонку "${column.title}"? Все карточки внутри тоже удалятся.`)) {
      onDeleteColumn(column.id);
    }
  }

  return (
    <ColumnWrapper $isDragOver={isDragOver}>
      <ColumnHeader $color={column.color}>
        <CountBadge>{column.cards.length}</CountBadge>

        <ColumnTitleInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          onBlur={handleTitleBlur}
          onKeyDown={e => e.key === 'Enter' && (e.target as HTMLInputElement).blur()}
        />

        <ButtonsContainer>
          <ColorPickerWrapper>
            <EditIconButton htmlFor={`color-${column.id}`} title="Изменить цвет колонки">
              ✏️
            </EditIconButton>
            <ColorPicker
              id={`color-${column.id}`}
              type="color"
              value={column.color}
              onChange={e => onColorChange(column.id, e.target.value)}
            />
          </ColorPickerWrapper>

          <DeleteColumnButton onClick={handleDeleteColumn} title="Удалить колонку">
            ✕
          </DeleteColumnButton>
        </ButtonsContainer>
      </ColumnHeader>

      <div
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        style={{ display: 'contents' }}
      >
        <CardList>
          {column.cards.map((card, index) => (
            <div
              key={card.id}
              onDragOver={e => e.preventDefault()}
              onDrop={e => { 
                e.stopPropagation(); 
                onDrop(e, column.id, index); 
              }}
            >
              <Card
                card={card}
                columnId={column.id}
                onEdit={onEditCard}
                onDelete={onDeleteCard}
                onDragStart={onDragStart}
              />
            </div>
          ))}
        </CardList>
      </div>

      <AddCardButton $color={column.color} onClick={() => onAddCard(column.id)}>
        + Add task...
      </AddCardButton>
    </ColumnWrapper>
  );
}

export default Column;