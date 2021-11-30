package edu.uark.registerapp.controllers;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.servlet.ModelAndView;

import edu.uark.registerapp.controllers.enums.ViewModelNames;
import edu.uark.registerapp.controllers.enums.ViewNames;
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

    @GetMapping(value="/playAction")
	public ModelAndView start() {
		return (new ModelAndView(ViewNames.PLAY_ACTION.getViewName()))
			.addObject(
				ViewModelNames.PLAYER.getValue(),
				(new PlayerEntity()).setCodename(StringUtils.EMPTY));
	}

    @GetMapping(value="/startServer")
    public String startServer(){
        udpBaseServer server = new udpBaseServer();
        try{
            String udpResponse = server.udpResponse();
            return udpResponse;
        }
        catch(Exception e){
            System.out.println(e);
            return e.toString();
        }
    }

    @GetMapping(value="/stopServer")
    public int stopServer(){
        try{
            udpBaseClient.main(null);
            return HttpStatus.ACCEPTED.value();
        }
        catch(Exception e){
            System.out.println(e);
            return HttpStatus.BAD_REQUEST.value();
        }
    }

    @GetMapping("/{playerId}")
    PlayerEntity findById(@PathVariable int playerId){
        return repo.getPlayerById(playerId);
    }

    @PostMapping(path="/new",consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PlayerEntity> createPlayer(@RequestBody PlayerEntity playerEntity) throws Exception {
		PlayerEntity player = repo.save(playerEntity);
        if (player == null){
            throw new Exception();
        }else{
            return new ResponseEntity<>(player, HttpStatus.CREATED);
        }
	}

}
