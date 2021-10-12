package edu.uark.registerapp.commands.players;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.uark.registerapp.commands.ResultCommandInterface;
import edu.uark.registerapp.commands.exceptions.NotFoundException;
import edu.uark.registerapp.models.api.Player;
import edu.uark.registerapp.models.entities.PlayerEntity;
import edu.uark.registerapp.models.repositories.PlayerRepository;

@Service
public class PlayerQuery implements ResultCommandInterface<Player>{
    @Override
    public Player execute(){
        final Optional<PlayerEntity> playerEntity = 
            this.playerRepository.findAllById(this.playerId);
        if (playerEntity.isPresent()){
            return new Player(playerEntity.get());
        }else{
            throw new NotFoundException("Player");
        }
    }

    private int playerId;
    public int getPlayerId(){
        return this.playerId;
    }
    public PlayerQuery setPlayerId(final int playerId){
        this.playerId = playerId;
        return this;
    }

    @Autowired
    private PlayerRepository playerRepository;
}