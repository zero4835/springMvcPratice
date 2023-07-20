package com.ecommerce.backend.serviceimpl;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Board;
import com.ecommerce.backend.repository.BoardRepository;
import com.ecommerce.backend.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {

  @Autowired
  private BoardRepository boardRepository;

  @Override
  public Board saveBoard(Board board) {
    LocalDateTime taipeiLocalDateTime = LocalDateTime.now();
    
    board.setCreateTime(taipeiLocalDateTime);
    return boardRepository.save(board);
  }

  @Override
  public Board getBoardById(Integer id) {
    Board newBoard = boardRepository.findById(id);
    return newBoard;
  }
}
