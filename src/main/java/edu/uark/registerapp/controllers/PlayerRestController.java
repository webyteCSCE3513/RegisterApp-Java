package edu.uark.registerapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.servlet.ModelAndView;
// import edu.uark.registerapp.commands.players.PlayerQuery;

import edu.uark.registerapp.models.api.Player;
// import edu.uark.registerapp.controllers.enums.ViewModelNames;
// import edu.uark.registerapp.controllers.enums.ViewNames;
// import edu.uark.registerapp.models.api.Player;
import edu.uark.registerapp.models.entities.PlayerEntity;
import edu.uark.registerapp.models.repositories.PlayerRepository;

@RestController
@RequestMapping(value="/api/player")
public class PlayerRestController {
    @Autowired
    private PlayerRepository repo;

    @GetMapping("/all")
    public Iterable<PlayerEntity> getAllPlayers(){
        return repo.findAll();
    }

    @GetMapping("/{playerId}")
    PlayerEntity findById(@PathVariable int playerId){
        return repo.getPlayerById(playerId);
    }

    @PostMapping("/new")
    public ResponseEntity<PlayerEntity> createPlayer(@RequestBody PlayerEntity playerEntity) {
		try {
			PlayerEntity _player = repo
					.save(new PlayerEntity(playerEntity.getId(), playerEntity.getFirstName(), playerEntity.getLastName(), playerEntity.getCodename()));
			return new ResponseEntity<>(_player, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    // Properties
	// @Autowired
	// private PlayerQuery playerQuery;
}
