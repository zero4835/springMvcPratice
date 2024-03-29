package com.ecommerce.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Board;
import com.ecommerce.backend.repository.BoardRepository;
import com.ecommerce.backend.service.BoardService;
import com.ecommerce.backend.service.JWTService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/board")
public class BoardController {
  @Autowired
  private BoardRepository boardRepository;

  @Autowired
  private BoardService boardService;

  @Autowired
  private JWTService jwtService;

  private String convertToRelativeUrl(String imageUrl) {
    return imageUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
  }

  @GetMapping("/")
  public List<Board> Boards() {
    List<Board> boardList = boardRepository.findAll();
    for (Board board : boardList) {
      board.setIconUrl(convertToRelativeUrl(board.getIconUrl()));

      if (board.getIconUrl().startsWith("./")) {
        board.setIconUrl(board.getIconUrl().substring(1));
      }
    }
    return boardList;
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getBoardById(@PathVariable Integer id) {
    Board board = boardService.getBoardById(id);
    if (board != null) {
      String BoardImgUrl = board.getIconUrl();
      String relativeBoardImageUrl = BoardImgUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
      if (relativeBoardImageUrl.startsWith("./")) {
        relativeBoardImageUrl = relativeBoardImageUrl.substring(1);
      }
      board.setIconUrl(relativeBoardImageUrl);
      return ResponseEntity.ok().body(board);
    }
    return ResponseEntity.notFound().build();
  }

  @GetMapping("/getBoardByName/{name}")
  public ResponseEntity<?> getBoardByBoardName(@PathVariable String name) {
    Board board = boardService.getBoardByBoardName(name);
    if (board != null) {
      String BoardImgUrl = board.getIconUrl();
      String relativeBoardImageUrl = BoardImgUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
      if (relativeBoardImageUrl.startsWith("./")) {
        relativeBoardImageUrl = relativeBoardImageUrl.substring(1);
      }
      board.setIconUrl(relativeBoardImageUrl);
      return ResponseEntity.ok().body(board);
    }
    return ResponseEntity.notFound().build();
  }

  @PostMapping("/")
  public ResponseEntity<Board> createBoard(@Valid @RequestBody Board board) {
    Board newBoard = boardService.saveBoard(board);
    return ResponseEntity.ok().body(newBoard);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteBoardEntity(@PathVariable Long id) {
    boardRepository.deleteById(id);
    return ResponseEntity.ok().build();
  }
}
