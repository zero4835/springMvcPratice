package com.ecommerce.backend.service;

import com.ecommerce.backend.model.Board;

public interface BoardService {

  public Board saveBoard(Board board);

  public Board getBoardById(Integer id);

  public Board getBoardByBoardName(String name);
}
