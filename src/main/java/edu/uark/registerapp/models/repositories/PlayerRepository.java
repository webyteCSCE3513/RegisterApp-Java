package edu.uark.registerapp.models.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import edu.uark.registerapp.models.entities.PlayerEntity;

public interface PlayerRepository extends CrudRepository<PlayerEntity, UUID> {
    Optional<PlayerEntity> findById(int playerId);

    PlayerEntity getPlayerById(int playerId);

    Optional<PlayerEntity> findAllById(int playerId);

    PlayerEntity save(PlayerEntity playerEntity);
}
