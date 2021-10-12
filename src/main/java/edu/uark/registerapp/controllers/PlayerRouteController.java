package edu.uark.registerapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import edu.uark.registerapp.commands.players.PlayerQuery;
import edu.uark.registerapp.controllers.enums.ViewModelNames;
import edu.uark.registerapp.controllers.enums.ViewNames;
import edu.uark.registerapp.models.api.Player;

@RequestMapping(value="/player")
public class PlayerRouteController {
    @RequestMapping(method = RequestMethod.GET)
	public ModelAndView showProductListing() {
		ModelAndView modelAndView =
			new ModelAndView(ViewNames.PRODUCT_LISTING.getViewName());

		try {
			modelAndView.addObject(
				ViewModelNames.PLAYER.getValue(),
				this.playerQuery.execute());
		} catch (final Exception e) {
			modelAndView.addObject(
				ViewModelNames.ERROR_MESSAGE.getValue(),
				e.getMessage());
			modelAndView.addObject(
				ViewModelNames.PLAYER.getValue(),
				(new Player[0]));
		}
        return modelAndView;
        }

        @Autowired 
        private PlayerQuery playerQuery;
}
