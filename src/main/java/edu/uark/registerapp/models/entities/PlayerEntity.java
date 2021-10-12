package edu.uark.registerapp.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.apache.commons.lang3.StringUtils;
import edu.uark.registerapp.models.api.Player;

@Entity
@Table(name="player")
public class PlayerEntity {
    @Id
    @Column(name="id", updatable = false)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private final int id;
    
    public int getId(){
        return this.id;
    }

    @Column(name="first_name")
    private String firstName;

    public String getFirstName(){
        return this.firstName;
    }
    public PlayerEntity setFirstName(final String firstName){
        this.firstName = firstName;
        return this;
    }

    @Column(name="last_name")
    private String lastName;

    public String getLastName(){
        return this.lastName;
    }
    public PlayerEntity setLastName(final String lastName){
        this.lastName = lastName;
        return this;
    }

    @Column(name="codename")
    private String codename;
    
    public String getCodename(){
        return this.codename;
    }
    public PlayerEntity setCodename(final String codename){
        this.codename = codename;
        return this;
    }

    public Player synchronize(final Player apiPlayer) {
		this.setFirstName(apiPlayer.getfirstName());
		this.setLastName(apiPlayer.getLastName());
        this.setCodename(apiPlayer.getCodename());

		apiPlayer.setId(this.getId());
		return apiPlayer;
	}

	public PlayerEntity() {
		this.id = 0;
		this.firstName = StringUtils.EMPTY;
        this.lastName = StringUtils.EMPTY;
        this.codename = StringUtils.EMPTY;
	}

	public PlayerEntity(final int id, final String firstName, final String lastName, final String codename) {
		this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.codename = codename;
	}

	public PlayerEntity(final Player apiPlayer) {
    	this.id = 0;
		this.firstName = apiPlayer.getfirstName();
		this.lastName = apiPlayer.getLastName();
        this.codename = apiPlayer.getCodename();
	}
}
