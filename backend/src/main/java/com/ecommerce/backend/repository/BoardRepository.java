package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
  Board findById(Integer id);

  Board findByBoardName(String name);
}